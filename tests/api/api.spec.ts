import { test, expect } from "@playwright/test";
import fs from 'fs';
import path from 'path';

test.describe("Api testing system", () => {
    const BASE_URL = 'http://127.0.0.1:3000/api'

    // Run test with "npm run test:api " to use api.config.ts

    test("simple test - response status -200 ", async ({ request }) => {
        // Arrange:
        // Act:
        const response = await request.get(`${BASE_URL}/users`);
        console.log(response.status())
        const responseBody = await response.json()
        console.log(responseBody)
        // Assert:
        expect(response.status()).toBe(200);
    });

    test("Negative test -  response status 404 ", async ({ request }) => {
        // Arrange:
        // Act:
        const response = await request.get(`${BASE_URL}/users11`);
        console.log(response.status())
        const responseBody = await response.json()
        console.log(responseBody)
        // Assert:
        expect(response.status()).toBe(404); 
    });

    test("simple test - GET single user", async ({ request }) => {
        // Arrange:
        // Act:
        const response = await request.get(`${BASE_URL}/users/1`);
        // first way to get response
        const responseUserOne = JSON.parse(await response.text())
        // second way to get response
        const responseText = await response.text()
        // third way to get response
        const responseBody = await response.json()
        // console.log(responseBody)
        // console.log(responseText)
        // console.log(responseUserOne)
        // Assert:
        expect(response.status()).toBe(200);
        expect(responseBody.id).toBe(1);
        expect(responseUserOne.firstname).toBe('Moses');
        expect(responseBody.firstname).toBe('Moses');
        expect(responseBody.email).toBeTruthy();
    });

    test("simple test - POST single user", async ({ request }) => {
        // Arrange:
        // Act:
        const response = await request.post(`${BASE_URL}/users`, { 
            data: {
            "email": "szymon@example.com",
            "firstname": "Szymon",
            "lastname": "Brak",
            "password": "123456",
            "avatar": "string"
          }}
        );
        const responseBody = await response.json()
        const userID = responseBody.id
        fs.writeFileSync('userID.json', JSON.stringify({ id: userID})); 
        // Assert:
        expect(response.status()).toBe(201); 
    });
    
    test("login and save token - GET single user", async ({ request }) => {
        // Arrange:
        // Act:
        const response = await request.post(`${BASE_URL}/login` , {
            data: {
                "email": "szymon@example.com",
                "password": "123456"
        }});
        const responseBody = await response.json()
        const token = responseBody.access_token
        fs.writeFileSync('token.json', JSON.stringify({ token: token}));
        // Assert:
        expect(response.status()).toBe(200);
    });

    test("simple test - PUT single user", async ({ request }) => {
        // Arrange:
        const fileuserID= path.join(__dirname, '../../userID.json')
        const filetoken = path.join(__dirname, '../../token.json')
        const userID = JSON.parse(fs.readFileSync(fileuserID, 'utf-8')).id
        const token = JSON.parse(fs.readFileSync(filetoken, 'utf-8')).token

        // update token
        // Act:
        const response = await request.put(`${BASE_URL}/users/${userID}`, { 
            headers: {
                'Authorization': `Bearer ${token}`,
              },
            data: {
            "email": "szymon@example.com",
            "firstname": "Szymon",
            "lastname": "Brak - updated",
            "password": "123456",
            "avatar": "string"
          },
        });
        const responseBody = await response.json()
        // Assert:
        expect(response.status()).toBe(200);  
    });
    test("simple test - DELETE single user", async ({ request }) => {
        // Arrange:

        // Odopalane z plikiem api.config.ts z scryptu npm run test:api brak headera z tokenem 

        const fileuserID= path.join(__dirname, '../../userID.json')
        const userID = JSON.parse(fs.readFileSync(fileuserID, 'utf-8')).id
        // Act:
        const response = await request.delete(`${BASE_URL}/users/${userID}`);
        // Assert:  
        await expect(response.status()).toBe(200);
    });
});