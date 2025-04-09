import { colors } from './aurora/theme';

export function initializeDarkMode() {
  document.documentElement.classList.add('dark');
  document.body.style.backgroundColor = colors.backgroundDark;
  document.body.style.color = colors.textPrimary;
}
