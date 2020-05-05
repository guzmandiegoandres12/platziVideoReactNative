import React,{ Component } from 'react';
import { Text, FlatList } from 'react-native';
import Sugestionlayout  from '../Componets/Lists/SugestionLayout';
import Empty from '../Componets/Lists/Empty';
import VerticalSeparator from '../Componets/Lists/VerticalSeparator';
import Sugestion from "../Componets/Sugestion";

class SugetionsList extends Component {
  keyestractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <VerticalSeparator/>
  render() {
    return (
      <Sugestionlayout title="Sugerencias para ti">
        <FlatList 
          keyExtractor = {this.keyestractor}
          data={this.props.data}
          renderItem={({ item })=><Sugestion {...item}/>}
          ListEmptyComponent={()=>this.renderEmpty()}
          ItemSeparatorComponent={()=>this.itemSeparator()}
        />
      </Sugestionlayout>
    );
  }
}

export default SugetionsList;