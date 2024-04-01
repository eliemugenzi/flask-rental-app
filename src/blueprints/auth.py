from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from models import User, db

authRoute = Blueprint('auth', __name__, url_prefix='/auth')


@authRoute.route('/login', methods=['POST'])
def login():
    user_name = request.json.get('username')
    password = request.json.get('password')
    
    user = User.query.filter_by(username=user_name).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'wrong credintials'}), 401
        abort(401) 
        #pipmay be for security reasons

@authRoute.route('/register', methods=['POST'])
def register():
    data = request.json
    user_name = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if (user_name == 'edson'):
        role=='admin'
    role = 'user'
    gender = data.get('gender')

    if not(user_name and email and password):
        return jsonify({'message': 'Please fill all fields'}), 400
    existing_user = User.query.filter_by(username=user_name).first()
    if existing_user:
        return jsonify({'Error': 'Usermane already exists'}), 409
    
    hash_password = generate_password_hash(password)
    print(f"Hashed password: {hash_password}")

    new_user = User(username=user_name, email=email, password=hash_password, gender=gender, role=role)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 200