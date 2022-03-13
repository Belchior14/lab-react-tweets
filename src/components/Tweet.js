import { Actions } from "./Actions";
import { Message } from "./Message";
import { Timestamp } from "./Timestamp";
import { User } from "./User";
import { ProfileImage } from "./ProfileImage";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image} />
      <div className="body">
        <div className="top">
          <User user={props.user} />
          <Timestamp timestamp={props.timestamp} />
        </div>
        <Message message={props.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
