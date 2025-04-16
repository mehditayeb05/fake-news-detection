# 📰 Fake News Detection

This project detects fake news using Natural Language Processing (NLP) and machine learning techniques, including Logistic Regression and Random Forest. It includes steps for data preprocessing, TF-IDF vectorization, model evaluation, and a simple user interface for testing predictions on news articles.

---

## 🛠️ Technologies Used

- **Python**  
- **Pandas**, **NumPy**
- **Scikit-learn**
- **NLTK**
- **Matplotlib**, **Seaborn**
- **HTML**, **CSS**, **JavaScript**

---

## 📂 Project Structure

- **interface ml/**  
  This folder contains the user interface and backend API files.
  - `API.ipynb`             : Backend API (Notebook) - Backend logic for processing and prediction.
  - `index.html`            : Web interface (input form) - The HTML page for user input.
  - `saved_model.pkl`       : Model backup (if any) - Saved model, if a backup exists.
  - `script.js`             : JavaScript logic for the web form - JS for form handling.
  - `style.css`             : Styling for the web page - CSS for styling the interface.
  - `test.txt`              : Sample news input - A test news article for prediction.
  - `trained_model.pkl`     : Trained ML model - The final trained model for fake news detection.
  - `vectorizer.pkl`        : TF-IDF vectorizer - TF-IDF vectorizer for text preprocessing.

- **projet/**  
  This folder contains the dataset and model training files.
  - `data.rar`              : Dataset archive - The dataset used for training the model.
  - `mini_projet.ipynb`     : Jupyter notebook: data prep + training - Notebook for data processing and model training.
