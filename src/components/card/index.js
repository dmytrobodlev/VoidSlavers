import * as R from "ramda";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// ui
import { Box, Flex, PositionedBox, PositionedFlex } from "../../ui";
///////////////////////////////////////////////////////////////////////////////////////////////////

// fake data generator
const getItems = (count, subName) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}${subName}`,
    content: (
      <PositionedBox
        borderRadius="5px"
        bg="white"
        position="relative"
        height="150px"
        width="75px"
      >
        Card
        <PositionedFlex
          position="absolute"
          height="30px"
          width="30px"
          bottom="0"
          left="0"
          border="1px solid"
          borderColor="green"
          justifyContent="center"
          alignItems="center"
          bg="lightgreen"
          borderRadius="5px"
          transform="translate(-10%, 10%)"
        >
          5
        </PositionedFlex>
        <PositionedFlex
          position="absolute"
          height="30px"
          width="30px"
          bottom="0"
          right="0"
          border="1px solid"
          borderColor="red"
          justifyContent="center"
          alignItems="center"
          bg="lightcoral"
          borderRadius="5px"
          transform="translate(10%, 10%)"
        >
          5
        </PositionedFlex>
      </PositionedBox>
    )
  }));
