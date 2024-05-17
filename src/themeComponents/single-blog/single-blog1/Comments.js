import { FormattedMessage } from 'react-intl';
import Send from './assets/images/send.svg';
const Comments = () => {
  return (
    <>
      <section className="comments-section">
        <div className="comments-form">
          <h4><FormattedMessage id='comments'/></h4>
          <p>لن يتم نشر عنوان بريدك الإلكتروني. الحقول المطلوبة محددة</p>
          <form>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label><FormattedMessage id='name'/></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label><FormattedMessage id='email'/></label>
                  <input type="email" className="form-control" />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label><FormattedMessage id='addComment'/></label>
                  <textarea className="form-control" rows="6"></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn">
              <Send />
              <FormattedMessage id='sendBtn' />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Comments;
