import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 100
  },
  gridList: {
    width: "100%",
    height: "100%",
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'assets/sky.jpg',
    title: 'I <3 Men',
    author: 'Solstis',
  },  {
    img: 'assets/sky.jpg',
    title: 'Happy Raver Mix',
    author: 'it me',
  },  {
    img: 'assets/sky.jpg',
    title: 'I just n e e d death',
    author: 'kia sorento',
  },  {
    img: 'assets/sky.jpg',
    title: 'Industrial Bieber',
    author: 'Kleen Pockts',
  },  {
    img: 'assets/sky.jpg',
    title: 'Walt Disney Is Dead',
    author: 'Killinois',
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const StreamGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      cols={4}
      padding={15}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          style={styles.gridTile}
          key={tile.title}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default StreamGrid;