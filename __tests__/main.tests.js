
describe('createPartner', () => {
  let dbClientMock;
  let dialogMock;

  beforeEach(() => {
    // dbClientMock = jest.fn().mockImplementation(() => ({
    //   query: jest.fn().mockResolvedValueOnce({ rows: [] }),
    //   close: jest.fn(),
    // }));

    // dialogMock = jest.fn().mockImplementation(() => ({
    //   showMessageBox: jest.fn(),
    //   showErrorBox: jest.fn(),
    // }));
  });

  afterEach(() => {
    // jest.clearAllMocks();
  });

  
  it('должен успешно создать партнера', async () => {
    
    // const partnerData = { type:'testType', name:'testName', ceo:'testCeo', email:'testEmail@example.com', phone:'+1234567890', address:'Test Address', rating:5 };
    
    // const result = await createPartner(dbClientMock(), dialogMock(), partnerData);
    
    // expect(result).toBe(true);
    
//     Проверка вызова метода showMessageBox 
//     expect(dialogMock().showMessageBox).toHaveBeenCalledTimes(1); 
//     expect(dialogMock().showMessageBox).toHaveBeenCalledWith({ message: 'Успех! Партнер создан' });
  
//     Если вы хотите проверить вызов конкретной реализации диалога,
//     вам нужно имитировать ее поведение более детально
  
});

it('должен показать ошибку при существующем имени партнера ', async () => {

// const errorToThrow = new Error("Партнер с таким именем уже есть");
// dbClientMock.mockImplementationOnce(() => ({
// query :jest.fn().mockRejectedValue(errorToThrow)
// }));

// const partnerData={type:"existingType",name:"existingName",ceo:"existingCeo",email:"existing@example.com",phone:"+9876543210",address:"Existing Address",rating :4};

// await expect(createPartner(dbClientMock(),dialogMock(),partnerData)).resolves.toBe(false);

// expect(dialogMock().showErrorBox).toHaveBeenCalledTimes(1); 
// expect(dialogMock().showErrorBox).toHaveBeenCalledWith("Ошибка","Партнер с таким именем уже есть");

});
});