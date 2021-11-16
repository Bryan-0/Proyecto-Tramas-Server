from app import app, request
from app.utils import process_list

@app.route('/api/frame', methods=['POST'])
def frame():
    frame = [byte for byte in request.json['content'].split(' ') if len(byte) == 2]

    return {
        'success': True,
        'data': {
            'frame': process_list(frame)
        }
    }