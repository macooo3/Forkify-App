import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class Resultsview extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    this._data;
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new Resultsview();
