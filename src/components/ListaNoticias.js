import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListaNoticias = ({ news }) => {
  return (
    <div className="row">
      {news.map(noticia => (
        <Noticia
          key={noticia.url}//Always send uniq key when creating multiple components
          noticia={noticia}
        />
      ))}
    </div>
  );
}

ListaNoticias.propTypes = {
  news: PropTypes.array.isRequired
}

export default ListaNoticias;