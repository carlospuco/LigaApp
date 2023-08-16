import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import {  TeamResponse } from './../../../utils/interfaces/team';
import { PositionStyle } from './position-style';
interface PositionProps {
  team: TeamResponse
}
export const Position:FC<PositionProps> = ({ team }) => {
  return (
    <View style={PositionStyle.wrapper}>
      <View style={PositionStyle.resultWrapper}> 
        <View style={PositionStyle.teamWrapper}>
          <View style={PositionStyle.imageWrapper}>
          <Image style={PositionStyle.image} source={{uri: 'https://images.vexels.com/media/users/3/132208/isolated/preview/b6c63f2ec9d7dc0b53c71d47dc800561-logo-de-futbol.png'}}/>
            <Text style={PositionStyle.title}>{team.name_team}</Text>
          </View>
        </View>
        <View style={PositionStyle.detailsWrapper}>
          <Text style={PositionStyle.detail}>{team.goals_for_team}</Text>
          <Text style={PositionStyle.detail}>{team.goals_against_team}</Text>
          <Text style={PositionStyle.detail}>{team.goal_difference_team}</Text>
          <Text style={[PositionStyle.detail, PositionStyle.detailLarge]}>{team.points_team}</Text>
        </View>
      </View>
    </View>
  )
}