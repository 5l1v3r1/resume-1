import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

const styles = {
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflowX: 'auto'
  }
};

const tilesData = [
  {
    img: 'taiko drums.jpg',
    title: 'Taiko Drumming'
  },
  {
    img: 'underwater_rugby.jpg',
    title: 'Scuba'
  },
  {
    img: 'hiking.jpg',
    title: 'Hiking'
  },
  {
    img: 'toughguybookclub.jpg',
    title: 'Reading'
  }
];

const Interests = () => (
  <GridList style={styles.gridList} cols={2.2} cellHeight={200}>
    {tilesData.map(tile => (
      <GridTile
        key={tile.img}
        title={tile.title}
        actionIcon={<IconButton label="farp" />}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      >
        <img src={require(`../images/${tile.img}`)} alt={tile.title} />
      </GridTile>
    ))}
  </GridList>
);

export default Interests;
