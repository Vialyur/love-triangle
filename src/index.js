/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // определяем общее количество Spichonees
  let numberOfSpichonees = preferences.length;
  // объявляем переменную для количества Spichonnes, находящихся в любовных треугольниках
  let SpichoneesInTriangles = 0;
  // перебираем массив в поисках количества участников треугольников
  for (let i = 0; i<numberOfSpichonees; i += 1) {
    let Spichonee1 = preferences[i] - 1;
    if (Spichonee1 == i) continue;
    let Spichonee2 = preferences[Spichonee1] - 1;
    if (Spichonee2 == Spichonee1) continue;
    let Spichonee3 = preferences[Spichonee2] - 1;
    if (Spichonee3 == Spichonee2) continue;
    if (Spichonee3 == i) {
      SpichoneesInTriangles += 1;
    }
    // находим количество треугольников
  }
  return SpichoneesInTriangles / 3; 
};