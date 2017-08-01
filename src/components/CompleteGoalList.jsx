import React, { Component} from 'react';
import { connect} from 'react-redux';
import { setCompleted} from '../actions';
import { completeGoalRef} from '../firebase';
import moment from 'moment';


class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {email, title, date } = completeGoal.val();
        completeGoals.push({email, title , date})
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {

    completeGoalRef.set([]);
  }



  render() {
    console.log('this.props', this.props.completeGoals);
    var myDate = moment(new Date()).utcOffset(-240).format('YYYY-MM-DD HH:mm');

    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const {title, email, date} = completeGoal;
            return (
              <div key = {index}>
                <strong>{title}</strong> completed by <em>{email }</em> on <em>{ date }</em>
              </div>
            )
          })
        }
        <button
          className = "btn btn-primary"
          onClick = {() => this.clearCompleted()}
          >
            Clear All

        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals} = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);
