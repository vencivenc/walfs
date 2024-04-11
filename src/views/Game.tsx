import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useUser} from '../context/UserContext'
import {Button, Card, Icon, ListItem, Avatar} from "@rneui/themed";
import {supabase} from "../common/superbase";

const Game: React.FunctionComponent = () => {


  return (
    <>
      <Text>
        Players
      </Text>

      <View style={{paddingVertical: 8}}>
        {game?.players?.map((player, i) => (
          <ListItem
            key={i}

          >
            <ListItem.Content>
              <ListItem.Title
              >
                {player.name}
              </ListItem.Title>
              <ListItem.Subtitle>
                {player.character}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>


      <Card containerStyle={{margin: 0}}>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{padding: 0}}
          source={{
            uri:
              'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
          }}
        />
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component
          structure than actual design.
        </Text>
        <Button
          icon={
            <Icon
              name="code"
              color="#ffffff"
              iconStyle={{marginRight: 10}}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    </>
  );
};

export default Game;
