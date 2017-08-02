import express from 'express';
import bodyParser from 'body-parser';


const app = express();

/*mongoose.connect('mongodb://localhost/todos');*/

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));



app.listen(3000, function() {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;