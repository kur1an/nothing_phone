from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Load translations
with open('translations.json') as f:
    translations = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    language = request.json.get('language')
    return jsonify(translations.get(language, translations['en']))

if __name__ == '__main__':
    app.run(debug=True)
