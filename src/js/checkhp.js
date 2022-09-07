export default function checkHP(character) {
  if (character.health < 15) {
    return 'critical';
  }
  if (character.health > 50) {
    return 'healthy';
  }
  return 'wounded';
}
