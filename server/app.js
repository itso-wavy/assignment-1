const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { generateRandomPin } = require('./utils/generateRandomPin');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const jsonServer = axios.create({
  baseURL: 'http://localhost:5000',
});

// 라우터 설정
app.post('/login', (req, res) => {
  const { userId, pw } = req.body;

  if (userId === 'admin' && pw === '0000') {
    res.json({ Code: 200, Msg: '로그인 되었습니다.' });
  } else {
    res.status(401).json({ Msg: 'Invalid credentials' });
  }
});

app.get('/logout', (req, res) => {
  const { userId } = req.query;

  if (userId) {
    res.json({ Code: 204, Msg: '로그아웃 되었습니다.' });
  } else {
    res.status(401).json({ Msg: 'Invalid credentials' });
  }
});

app.get('/researchers', async (_req, res) => {
  try {
    const response = await jsonServer.get('/researchers');
    res.json({
      statecode: response.status,
      Msg: '조회 성공',
      researcher: response.data,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ Msg: 'Error fetching researchers' });
  }
});

app.post('/researcher', async (req, res) => {
  try {
    const newResearcher = req.body;

    newResearcher.password = '0000';
    newResearcher.pin = generateRandomPin();

    const response = await jsonServer.post('/researchers', newResearcher);

    res.json({
      statecode: response.status,
      Msg: '등록 되었습니다.',
      researcher: response.data,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ Msg: 'Error creating researcher' });
  }
});

app.patch('/researcher/reset', async (req, res) => {
  try {
    const { pin, password } = req.body;

    const queryResponse = await jsonServer.get(`/researchers?pin=${pin}`);
    const targetResearcher =
      queryResponse.data.length > 0 ? queryResponse.data[0] : null;

    if (targetResearcher && targetResearcher.password === password) {
      // 비밀번호 비교 후 초기화
      const response = await jsonServer.patch(
        `/researchers/${targetResearcher.id}`,
        {
          password: '0000', // 임의의 초기화 비번 '0000'
        }
      );

      return res.json({
        statecode: response.status,
        Msg: '초기화 성공',
      });
    } else {
      return res.status(400).json({ Msg: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ Msg: 'Error resetting researcher' });
  }
});

app.delete('/researcher', async (req, res) => {
  try {
    const { pin } = req.query;

    // 비밀번호 비교 없이 바로 삭제?
    const queryResponse = await jsonServer.get(`/researchers?pin=${pin}`);
    const targetResearcher =
      queryResponse.data.length > 0 ? queryResponse.data[0] : null;

    const response = await jsonServer.delete(
      `/researchers/${targetResearcher.id}`
    );

    res.json({
      statecode: response.status,
      Msg: '삭제 성공',
      researcher: response.data,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ Msg: 'Error resetting researcher' });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER CONNECTED TO ${PORT}`);
});
