var gradeBook = {
	_grades: [],

	addGrade: function (newGrade) {
		this._grades.push(newGrade);
	},

	getCountOfGrades: function () {
		return this._grades.length;
	},

	getAverage: function () {
		var sum = 0;
		for (var i = 0; i <= this._grades.length - 1; i++) {
			sum += this._grades[i];
		}
		var average = sum/this._grades.length;
		return average;
	},

	getLetterGrade: function () {
		var average = this.getAverage();
		if (average >= 90) {
			return 'A';
		}
		else if (average >= 80) {
			return 'B';
		}
		else if (average >= 70) {
			return 'C';
		}
		else if (average >= 60) {
			return 'D';
		}
		else {
			return 'F'
		}
	},

	reset: function () {
		this._grades = [];
	}
};

exports.book = gradeBook;