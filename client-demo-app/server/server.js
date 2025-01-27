import { fileURLToPath } from 'node:url';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const products = [
	{ id: 4, description: 'Soundbar', price: 419 },
	{ id: 8, description: 'OnePlus 9', price: 799.99 },
	{ id: 15, description: 'Alarm clock', price: 5.7 },
];

app.get('/api/products', (_req, res) => {
	setTimeout(() => {
		res.json(products);
	}, 1000);
});

app.post('/api/products', (req, res) => {
	req.body.id = Math.max(...products.map((x) => x.id)) + 1;
	products.push(req.body);

	setTimeout(() => {
		res.status(201);
		res.send(req.body);
	}, 2000);
});

const spaBase = fileURLToPath(new URL('./dist/cypdemoclient', import.meta.url));

app.use(express.static(spaBase));
app.get(function spaMiddleware(_req, res) {
	res.sendFile(fileURLToPath(new URL('./index.html', spaBase)));
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 5500;
app.listen(port, () =>
	console.log(`E2E demo server started @ http://localhost:${port}`)
);
