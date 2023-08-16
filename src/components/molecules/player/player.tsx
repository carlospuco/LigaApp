import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { PlayerResponse as PlayerInterface } from '../../../utils/interfaces/player'
import { PlayerStyle } from './player-style'
interface PlayerProps {
  player: PlayerInterface
}
export const Player: FC<PlayerProps> = ({ player }) => {
  return (
    <View style={PlayerStyle.wrapper}>
      <View style={PlayerStyle.teamWrapper}>
      </View>
      <View style={PlayerStyle.playerWrapper}>
        <View style={PlayerStyle.playerNumberWrapper}>
          <Text style={PlayerStyle.playerNumber}># {player.number_player}</Text>
        </View>
        <View style={PlayerStyle.playerNameWrapper}>
          <Text style={PlayerStyle.playerName}>{player.name_player}</Text>
        </View>
        <View style={PlayerStyle.detailsWrapper}>
          <View style={PlayerStyle.detail}>
            <Image style={PlayerStyle.icon} source={require('./../../../assets/img/yellow-card.png')} />
            <Text style={PlayerStyle.detailText}>{player.yellow_card}</Text>
          </View>
          <View style={PlayerStyle.detail}>
            <Image style={PlayerStyle.icon} source={require('./../../../assets/img/red-card.png')} />
            <Text>{player.red_card}</Text>
          </View>
          <View style={PlayerStyle.detail}>
            <Image style={PlayerStyle.icon} source={require('./../../../assets/img/ball-colored.png')} />
            <Text>{player.goal}</Text>
          </View>
        </View>
      </View>

    </View>
  )
}