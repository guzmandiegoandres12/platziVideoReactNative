import React,{ Component } from 'react';
import { Text, FlatList } from 'react-native';
import Sugestionlayout  from '../Componets/Lists/SugestionLayout';
import Empty from '../Componets/Lists/Empty';
import VerticalSeparator from '../Componets/Lists/VerticalSeparator';
class SugetionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <VerticalSeparator/>
  render() {
    const list=[
      {
        title: 'Advangers: End Game',
        key: '1'
      },
      {
        title: 'Pokemon',
        key: '2'
      } ,
      {
        title: 'Mi Villano Favorito',
        key: '3'
      } ,
    ]
    return (
      <Sugestionlayout title="Sugerencias para ti">
        <FlatList 
          data={list}
          renderItem={({ item })=>(
            <Text>{item.title}</Text>
          )}
          ListEmptyComponent={()=>this.renderEmpty()}
          ItemSeparatorComponent={()=>this.itemSeparator()}
        />
      </Sugestionlayout>
    );
  }
}

export default SugetionsList;