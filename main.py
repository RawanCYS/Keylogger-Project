
from flask import Flask, render_template, request


app = Flask(__name__, template_folder='templates', static_folder='static')



@app.route('/',  methods=['GET', 'POST',])
def index():
    return render_template('index.html')



@app.route('/admin',  methods=['GET', 'POST',])
def admin():
    return render_template('index2.html')


@app.route('/submit',  methods=['GET', 'POST',])
def submit():
        return render_template('index1.html')




if __name__ == '__main__':
    app.run(debug=True)


