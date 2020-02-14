import * as R from "ramda";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// helpers
import * as H from "../../helpers";
// ui
import { Box, Flex, PositionedBox, PositionedFlex } from "../../ui";
// features
import { ItemsStatWrap } from "./ui";
///////////////////////////////////////////////////////////////////////////////////////////////////

const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const possibleCard = [
  {
    manaCost: 3,
    health: 3,
    power: 3,
    level: 1,
    requiredStoreLevel: 1,
    name: "The Creation",
    imageUrl: "https://i.imgur.com/Sopp33w.jpg"
  },
  {
    manaCost: 3,
    health: 5,
    power: 3,
    level: 1,
    requiredStoreLevel: 1,
    name: "Monster",
    imageUrl:
      "https://i.pinimg.com/originals/0f/2c/92/0f2c9272ed54800b0f2b000d23145bf2.jpg"
  },
  {
    manaCost: 3,
    health: 10,
    power: 5,
    level: 1,
    requiredStoreLevel: 1,
    name: "Soso",
    imageUrl:
      "https://i.pinimg.com/originals/c3/13/5a/c3135a4710c633d15a411c0176a49955.jpg"
  },
  {
    manaCost: 3,
    health: 3,
    power: 5,
    level: 1,
    requiredStoreLevel: 1,
    name: "Kraster",
    imageUrl:
      "https://i.pinimg.com/originals/f1/91/35/f19135f8e88fe6c6e124b7dd9c369f2b.jpg"
  },
  {
    manaCost: 3,
    health: 1,
    power: 1,
    level: 1,
    requiredStoreLevel: 2,
    name: "Salamon",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/331810d3-aba6-4af3-b75b-7b9c6567fb39/da0gm40-d09d6217-aaba-4348-b5d9-c2424b367f07.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzMTgxMGQzLWFiYTYtNGFmMy1iNzViLTdiOWM2NTY3ZmIzOVwvZGEwZ200MC1kMDlkNjIxNy1hYWJhLTQzNDgtYjVkOS1jMjQyNGIzNjdmMDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZK5pqBjFeL_2vcQLDszMox74uAAVoBp7fddUO7tEUsg"
  },
  {
    manaCost: 3,
    health: 2,
    power: 5,
    level: 1,
    requiredStoreLevel: 2,
    name: "Deer deer",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFw76hWuisjt_CQcUT8LeRSKtwlHMBArk8-QjeybY67_YGa2uN"
  },
  {
    manaCost: 3,
    health: 6,
    power: 6,
    level: 1,
    requiredStoreLevel: 2,
    name: "Crown",
    imageUrl:
      "https://vignette.wikia.nocookie.net/therealm3819/images/6/6a/F982f37dc0b25ddca6fab1f2129d14da.jpg/revision/latest?cb=20170220071559"
  }
];

// fake data generator
const getItems = (cardsToShow, subName, cards) =>
  cardsToShow.map((card, index) => ({
    ...card,
    id: `item-${H.makeUid(6)}:${subName}`,
    cardType: subName
  }));

const StatBar = ({
  top,
  right,
  left,
  bottom,
  value,
  level,
  bg,
  transform,
  borderColor
}) => {
  const [curLevel, setCurLevel] = useState(1);
  const [withAnimation, setWithAnimation] = useState(false);
  useEffect(() => {
    if (R.gt(level, curLevel)) {
      setCurLevel(level);
      setWithAnimation(true);
    }
  }, [level]);
  const handleCheckWithAnimation = () => {
    if (H.isTrue(withAnimation)) {
      setTimeout(() => setWithAnimation(false), 1000);
      return true;
    }
    return false;
  };
  return (
    <ItemsStatWrap
      position="absolute"
      height="4vh"
      width="4vh"
      bottom={bottom || "unset"}
      right={right || "unset"}
      left={left || "unset"}
      top={top || "unset"}
      withAnimation={handleCheckWithAnimation()}
      border="0.2vh solid"
      borderColor={borderColor}
      justifyContent="center"
      alignItems="center"
      bg={bg}
      fontSyze="2vh"
      borderRadius="1vh"
      transform={transform}
    >
      {value}
    </ItemsStatWrap>
  );
};

const Card = ({ item }) => {
  return (
    <PositionedFlex
      borderRadius="5px"
      bg="white"
      position="relative"
      height="20vh"
      width="10vh"
      color="white"
      border="0.5vh solid"
      justifyContent="center"
      alignItems="center"
      borderColor={R.gte(item.level, 2) ? "gold" : "#848484"}
      background={`url(${item.imageUrl}) center center no-repeat`}
      backgroundSize="cover"
    >
      {item.name}
      <StatBar
        top="0"
        left="0"
        bg="lightblue"
        borderColor="blue"
        level={item.level}
        value={item.manaCost}
        transform="translate(-15%, -15%)"
      />
      <StatBar
        left="0"
        bottom="0"
        bg="lightgreen"
        borderColor="green"
        level={item.level}
        value={item.power}
        transform="translate(-15%, 15%)"
      />
      <StatBar
        right="0"
        bottom="0"
        bg="lightcoral"
        borderColor="red"
        level={item.level}
        value={item.health}
        transform="translate(15%, 15%)"
      />
    </PositionedFlex>
  );
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source,
  destination,
  droppableSource,
  droppableDestination,
  curPositionPreName
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  const updatedItem = R.merge(removed, {
    cardType: droppableDestination.droppableId,
    id: `${curPositionPreName}:${droppableDestination.droppableId}`
  });
  destClone.splice(droppableDestination.index, 0, updatedItem);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

function getStyle(style, snapshot) {
  if (!snapshot.isDropAnimating) {
    return {
      ...style,
      userSelect: "none",
      margin: `0 4vh 0 0`
    };
  }
  return {
    ...style,
    userSelect: "none",
    margin: `0 4vh 0 0`,

    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`
  };
}

const CardSection = ({ height, items, droppableId }) => {
  return (
    <Droppable direction="horizontal" droppableId={droppableId}>
      {(provided, snapshot) => (
        <Flex
          padding="2vh 5vh"
          height={height || "50%"}
          width="100%"
          overflow="auto"
          justifyContent="center"
          ref={provided.innerRef}
          bg={snapshot.isDraggingOver ? "lightblue" : "lightgrey"}
          vorderColor="lightGray"
          borderBottom="0.1vh solid"
        >
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getStyle(provided.draggableProps.style, snapshot)}
                >
                  <Card item={item} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  );
};

const Map = () => {
  const availableToReorderCardsLists = ["cardsOnTable", "cardsInHand"];
  const availableToMoveByType = {
    cardsForBuy: "cardsInHand",
    cardsInHand: "cardsOnTable",
    cardsOnTable: "sell"
  };
  const storeCostPerLevel = {
    1: 5,
    2: 9,
    3: 13,
    4: 17,
    5: 21
  };
  const [round, setRound] = useState(1);
  const [mana, setMana] = useState(20);
  const [manapul, setManapul] = useState(3);
  const [storeLevel, setStoreLevel] = useState(1);
  const [upgradeStoreCost, setUpgradeStoreCost] = useState(5);
  const [cardsForBuy, setCardsForBuy] = useState(getItems([], "cardsForBuy"));
  const [cardsOnTable, setCardsOnTable] = useState(
    getItems([], "cardsOnTable")
  );
  const [cardsInHand, setCardsInHand] = useState(getItems([], "cardsInHand"));

  const refreshCardsForBuy = () => {
    const possibleCardByLevel = possibleCard.filter(
      ({ requiredStoreLevel }) => storeLevel >= requiredStoreLevel
    );
    const cardsForStore = shuffle(
      possibleCardByLevel.concat(possibleCardByLevel)
    );
    const takeCards = storeLevel + 2;
    const cardsToShow = R.slice(0, takeCards, cardsForStore);
    setCardsForBuy(getItems(cardsToShow, "cardsForBuy"));
  };
  useEffect(() => {
    refreshCardsForBuy();
  }, []);
  const droppableAreasIds = {
    cardsForBuy,
    cardsInHand,
    cardsOnTable
  };

  const functionsToChange = {
    cardsForBuy: setCardsForBuy,
    cardsInHand: setCardsInHand,
    cardsOnTable: setCardsOnTable
  };

  const getList = id => R.path([id], droppableAreasIds);

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    const sourseList = getList(source.droppableId);

    if (
      R.and(
        R.contains(source.droppableId, availableToReorderCardsLists),
        R.equals(source.droppableId, destination.droppableId)
      )
    ) {
      const items = reorder(sourseList, source.index, destination.index);
      return R.path([destination.droppableId], functionsToChange)(items);
    }
    const curPositionName = R.last(R.split(":", result.draggableId));
    const curPositionPreName = R.head(R.split(":", result.draggableId));
    if (
      R.not(
        R.pathEq(
          [curPositionName],
          destination.droppableId,
          availableToMoveByType
        )
      )
    )
      return;

    if (R.equals(destination.droppableId, "sell")) {
      setMana(R.inc(mana));

      const sourceClone = getList(source.droppableId);
      sourceClone.splice(source.index, 1);
      R.path([source.droppableId], functionsToChange)(sourceClone);
      return;
    }

    if (H.notEquals(source.droppableId, destination.droppableId)) {
      const indexedSourseList = R.indexBy(R.prop("id"), sourseList);
      const item = R.path([result.draggableId], indexedSourseList);
      if (R.equals(destination.droppableId, "cardsInHand")) {
        if (R.gt(item.manaCost, mana)) return;
        setMana(R.subtract(mana, item.manaCost));
      }
      const resultToSave = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
        curPositionPreName
      );
      R.path([destination.droppableId], functionsToChange)(
        resultToSave[destination.droppableId]
      );
      R.path([source.droppableId], functionsToChange)(
        resultToSave[source.droppableId]
      );
    }
  };
  const handleUprgadeCard = itemName => {
    let uprgadedItem = null;
    const newCardsInHand = R.filter(item => {
      if (R.equals(item.name, itemName)) {
        if (H.isNilOrEmpty(uprgadedItem)) {
          uprgadedItem = item;
        }
        return false;
      }
      return true;
    }, cardsInHand);
    setCardsOnTable(
      R.filter(item => {
        if (R.equals(item.name, itemName)) {
          return false;
        }
        return true;
      }, cardsOnTable)
    );
    const uprgadedItemForSave = {
      ...uprgadedItem,
      manaCost: R.multiply(uprgadedItem.manaCost, 2),
      health: R.multiply(uprgadedItem.health, 2),
      power: R.multiply(uprgadedItem.power, 2),
      level: R.inc(uprgadedItem.level)
    };
    setCardsInHand(R.append(uprgadedItemForSave, newCardsInHand));
  };
  useEffect(() => {
    const some = {};
    R.any(item => {
      const velue = R.inc(R.pathOr(0, [item.name], some));
      if (R.gte(velue, 3)) {
        handleUprgadeCard(item.name);
        return true;
      }
      some[item.name] = velue;
      return false;
    }, cardsInHand);
    R.any(item => {
      const velue = R.inc(R.pathOr(0, [item.name], some));
      if (R.gte(velue, 3)) {
        handleUprgadeCard(item.name);
        return true;
      }
      some[item.name] = velue;
      return false;
    }, cardsOnTable);
  }, [cardsInHand]);
  const handleNextRound = () => {
    const nexMana = R.inc(manapul);
    setManapul(nexMana);
    setMana(nexMana);
    refreshCardsForBuy();
    setRound(R.inc(round));
    setUpgradeStoreCost(
      R.subtract(R.path([storeLevel], storeCostPerLevel), round)
    );
  };
  const handleUpgradeStore = () => {
    if (R.lt(mana, upgradeStoreCost)) return;
    const nextStoreLevel = R.inc(storeLevel);
    setStoreLevel(nextStoreLevel);
    setMana(R.subtract(mana, upgradeStoreCost));
    setUpgradeStoreCost(
      R.subtract(R.path([nextStoreLevel], storeCostPerLevel), round)
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex fontSize="2vh" width="100vw" justifyContent="center">
        <Flex
          width="100vh"
          height="100vh"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex
            height="50vh"
            width="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Flex
              height="50%"
              width="100%"
              alignItems="center"
              justifyContent="center"
              vorderColor="lightGray"
              borderTop="1px solid"
            >
              <Flex
                alignItems="center"
                p="0 2vh"
                bg="blue"
                color="white"
                borderRadius="5vh"
                width="max-content"
                height="5vh"
                onClick={() => handleUpgradeStore()}
              >
                Upgraid Store {upgradeStoreCost}
              </Flex>

              <Droppable direction="horizontal" droppableId="sell">
                {(provided, snapshot) => (
                  <Flex
                    alignItems="center"
                    p="0 2vh"
                    ml="2vh"
                    color="white"
                    borderRadius="5vh"
                    width="max-content"
                    ref={provided.innerRef}
                    bg={snapshot.isDraggingOver ? "lightblue" : "blue"}
                    height="5vh"
                    onClick={() => handleUpgradeStore()}
                  >
                    Sell
                  </Flex>
                )}
              </Droppable>
            </Flex>
            <CardSection items={cardsForBuy} droppableId="cardsForBuy" />
          </Flex>
          <Flex
            height="50vh"
            flexDirection="column"
            justifyContent="space-between"
          >
            <PositionedBox height="50%" position="relative">
              <CardSection
                height="100%"
                items={cardsOnTable}
                droppableId="cardsOnTable"
              />
              <PositionedBox
                textAlign="center"
                lineHeight="5vh"
                width="10vh"
                right="0"
                position="absolute"
                top="0"
                color="white"
                bg="blue"
                onClick={() => handleNextRound()}
                transform="translate(100%, -50%)"
                borderRadius="3vh"
              >
                HEXT
              </PositionedBox>
            </PositionedBox>
            <PositionedBox height="50%" position="relative">
              <CardSection
                height="100%"
                items={cardsInHand}
                droppableId="cardsInHand"
              />
              <PositionedBox
                textAlign="center"
                lineHeight="5vh"
                width="10vh"
                right="0"
                position="absolute"
                bottom="0"
                color="white"
                bg="blue"
                borderRadius="3vh"
              >
                {mana}/{manapul}
              </PositionedBox>
            </PositionedBox>
          </Flex>
        </Flex>
      </Flex>
    </DragDropContext>
  );
};

export default Map;
