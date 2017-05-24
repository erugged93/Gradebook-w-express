class Grade {
	constructor(letterGrade, credits) {
		this._letterGrade = letterGrade;
		this._credits = credits;
	}
	getWeight() {
		return this._credits;
	}
	getGrade() {
		return this._letterGrade;
	}
}

exports.grade = Grade;