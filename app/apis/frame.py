from app import app, request
from app.utils import process_list

@app.route('/api/frame', methods=['POST'])
def frame():
    frame = request.json['content'].split(' ')

    return {
        'success': True,
        'data': {
            'frame': process_list(frame)
        }
    }