const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Narcisa',
//     occupation: 'Rich',
//     catchPhrase: 'Ai, que loucura!'
//   },
//   {
//     name: 'Deborah Secco',
//     occupation: 'Actress',
//     catchPhrase: 'Ai, que gostosa!'
//   },
//   {
//     name: 'Karol Conka',
//     occupation: 'Singer',
//     catchPhrase: 'Ai, que delicia!'
//   }
// ];

const movies = [
  {
    title: 'Childs Play',
    genre: 'Terror',
    plot: 'O filme trata da história de um boneco que ganha vida após um ritual vodu feito por um serial killer procurado pela polícia, e se torna um assassino. O serial Charles Lee Ray, ou simplesmente Chucky, deriva dos nomes dos notórios assassinos Charles Manson, Lee Harvey Oswald e James Earl Ray.!'
  },
  {
    title: 'Hellraiser',
    genre: 'Terror',
    plot: 'É um filme de horror britânico de 1987 dirigido por Clive Barker. A trama, que explora os temas sadomasoquismo, dor como fonte de prazer, moralidade sob stress e medo, é baseada no livro The Hellbound Heart, do próprio diretor.'
  },
  {
    title: 'The Curious Case of Benjamin Button',
    genre: 'Drama',
    plot: 'É um filme de drama estadunidense lançado em 2008, baseado em um conto homônimo lançado em 1921 pelo escritor F. Scott Fitzgerald.'
  }
];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });

Movie.create(movies, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
