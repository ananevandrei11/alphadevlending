import VK from '../Assets/image/vk.svg';
import FB from '../Assets/image/fb.svg';
import Instagram from '../Assets/image/instagram.svg';
import Telegram from '../Assets/image/telegram.svg';

let initialState = {
  linksHeader: [
    { id: 0, name: 'о мероприятии', href: '#about' },
    { id: 1, name: 'спикеры', href: '#speakers' },
  ],
  linksContact: [
    { id: 0, name: 'Политика конфиденциальности', href: '/' },
    { id: 1, name: 'Публичная оферта', href: '/' },
    { id: 2, name: '+7 912 123-45-67', href: 'tel:+79121234567', other: true  },
    { id: 3, name: 'about@microsoftforum.com', href: 'mailto:about@microsoftforum.com', other: true },
  ],
  linksNav: [
    { id: 0, name: 'о мероприятии', href: '#about' },
    { id: 1, name: 'темы', href: '/' },
    { id: 2, name: 'расписание', href: '/' },
    { id: 3, name: 'спикеры', href: '#speakers' },
    { id: 4, name: 'контакты', href: '/' },
  ],
  linksSocialNetworks: [
    { id: 0, name: 'vkontakte', icon: VK, href: 'https://vk.com' },
    { id: 1, name: 'facebook', icon: FB, href: 'https://facebook.com' },
    { id: 2, name: 'instagram', icon: Instagram, href: 'https://instagram.com' },
    { id: 3, name: 'telegram', icon: Telegram, href: 'https://telegram.com' },
  ],
};

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
