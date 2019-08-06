import React, { Component } from 'react';
import './CourseCard.css'

class CourseCard extends Component {
    render() {
        const {course} = this.props;
        const formatter = new Intl.DateTimeFormat('ru', {
            day: 'numeric',
            month: 'long',
        });
        return (
            <div className="course-card">
				<h1 className="course-card__header">{course.name}</h1>
				<div className="course-card__description">
					{course.description}
					<p className="course-card__date">C {course.start_date} &nbsp; {course.duration} месяцев</p>
				</div>
			</div>
        )
    }
}

export default CourseCard;
