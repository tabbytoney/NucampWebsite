import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';

const CommentsList = ({ campsiteId }) => {
  const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

  // conditional rendering
  if (comments && comments.length > 0) {
    return (
      <Col md='5' className='m-1'>
        <h4>Comments</h4>
        {comments.map((comments) => {
          return <Comment key={comments.id} comment={comments} />;
        })}
        <CommentForm campsiteId={campsiteId} />
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There are no comments for this campsite yet.
    </Col>
  );
};
export default CommentsList;
