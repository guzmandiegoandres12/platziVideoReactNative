import React,{ Component } from 'react';
import { Text, FlatList } from 'react-native';
import Sugestionlayout  from './Layouts/SugestionLayout';
import Empty from './Lists/Empty';
import VerticalSeparator from './Lists/VerticalSeparator';
import Sugestion from "./Sugestion";

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