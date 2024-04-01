from flask import Flask
from dotenv import load_dotenv
from os import environ as Env
from flask_migrate import Migrate
from flask_cors import CORS
from models import db
from blueprints.auth import authRoute
load_dotenv()

DATABASE_URL = Env.get('DATABASE_URL')
SECRET_KEY = Env.get('SECRET_KEY')

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = SECRET_KEY


migrate = Migrate(app, db)
db.init_app(app)

app.register_blueprint(authRoute)

if __name__ == "__main__":
    print(f"URL MAP: {app.url_map}")
    app.run(debug=True, port=2001)