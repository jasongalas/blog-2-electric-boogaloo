// Set up packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Set up connections
const routes = require('./controllers');
const sequelize = require('./config/connections');
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up cookies for sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
    },
    resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () =>
    console.log(
        `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
        )
    );
});
