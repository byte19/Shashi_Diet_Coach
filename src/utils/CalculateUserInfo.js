const CalculateUserInfo = ({height, weight, age, activityLevel}) => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmr = 10 * weight + 6.25 * height - 5 * age;

  let activityMultiplier;
  switch (activityLevel) {
    case 'Lightly Active':
      activityMultiplier = 1.375;
      break;
    case 'Moderately Active':
      activityMultiplier = 1.55;
      break;
    case 'Active':
      activityMultiplier = 1.725;
      break;
    case 'Very Active':
      activityMultiplier = 1.9;
      break;
    default:
      activityMultiplier = 1.2;
      break;
  }

  const maintenanceCalories = bmr * activityMultiplier;
  const fatLossCalories = maintenanceCalories - 500;

  return {bmi, maintenanceCalories, fatLossCalories};
};

export default CalculateUserInfo;
