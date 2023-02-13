export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
// Your API key: 32913143-9d11cb00b1a862195f0db0662
// URL-рядок HTTP-запиту.

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1.
// Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі per_page.
// Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1.

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
