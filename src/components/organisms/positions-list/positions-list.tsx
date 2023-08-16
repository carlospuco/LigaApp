import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { TeamResponse } from '../../../utils/interfaces/team'
import { Position } from '../../molecules/position/position'
import { PositionsListStyle } from './positions-list-style';
interface PositionListProps {
  teams: TeamResponse[]
}
export const PositionList: FC<PositionListProps> = ({ teams }) => {
  return (
    <ScrollView>
      {teams.map((team) => {
        return <Position key={team.id_team} team={team} />
      })}
    </ScrollView>
  )
}