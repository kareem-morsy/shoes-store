import Image from "next/future/image";
import user from "./assets/images/user.png";
import Calendar from "./assets/images/calendar.svg";
import Edit from "./assets/images/edit.svg";
import Trash from "./assets/images/trash.svg";
import { FormattedMessage } from "react-intl";

const CommentsGroup = () => {
  return (
    <>
      <section className="comments-group">
        <h4>
          <FormattedMessage id="comments" />
          <span>(4 عدد التعليقات)</span>
        </h4>
        <div className="comment-container">
          <div className="comment-name-date">
            <div className="comment-img">
              <Image src={user} alt="user-img" />
            </div>

            <div className="comment-date">
              <h5>هايدى صفوت</h5>
              <p>
                <Calendar />
                August 3, 2022
              </p>
            </div>
          </div>

          <div className="user-comment">
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </div>

        <div className="comment-container">
          <div className="comment-name-date">
            <div className="comment-img">
              <Image src={user} alt="user-img" />
            </div>

            <div className="comment-date">
              <h5>هايدى صفوت</h5>
              <p>
                <Calendar />
                August 3, 2022
              </p>
            </div>
          </div>

          <div className="user-comment">
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentsGroup;
