'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <div>
        <div>
        
        Many payroll activities are related to HR issues so the payroll and human resources departments must coordinate shared functions. This includes recruitment, salary increases, bonus payments, benefit deductions, vacation leaves and firing employees. The human resources department must be sensitive to the time devoted to payroll processing because as the champion of employee relations, they’ll face issues directly if paychecks aren’t processed correctly and on time. The payroll and HR departments are also privy to confidential employee data, including financial information, social security numbers and home addresses. The two departments must work together to ensure that this information doesn’t fall prey to unauthorized individuals or companies.
          </div>
        </div>;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true },
                                    document.querySelector('#displayreact')) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
