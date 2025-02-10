import assert from "assert";
import test from "node:test";

function setToAdmin(username, isAdmin) {
    return { name: username, isAdmin: isAdmin };
}

test("setToAdmin", async (t) => {
    await t.test("setToAdminTrue", (t) => {
        let testUsername = "test";
        let testIsAdmin = true;

        let acutal = setToAdmin(testUsername, testIsAdmin);
        let expected = { name: testUsername, isAdmin: testIsAdmin };

        assert.deepStrictEqual(acutal, expected);
    });
    await t.test("setToAdminFalse", (t) => {
        let testUsername = "test";
        let testIsAdmin = false;

        let acutal = setToAdmin(testUsername, testIsAdmin);
        let expected = { name: testUsername, isAdmin: testIsAdmin };

        assert.deepStrictEqual(acutal, expected);
    });
});

const fruits = ["apple", "banana", "orange"];
const expectedFruit = "banana";

test("fruits", async (t) => {
    t.test("expectedOneFruit", (t) => {
        assert.ok(fruits.includes(expectedFruit));
    });
});

const API_ENDPOINT_SINGLE = "https://freetestapi.com/api/v1/cars/";

async function fetchCar(id) {
    const response = await fetch(`${API_ENDPOINT_SINGLE}${id}`);
    const data = await response.json();
    return data;
}

async function testSingle(id) {
    const data = await fetchCar(id);
    assert.ok(data.id);
    assert.strictEqual(data.id, id);
}
testSingle(1);

test("fetchCar", async (t) => {
    let id = 1;
    const data = await fetchCar(id);
    await t.test("fetchCarSuccess", async (t) => {
        assert.strictEqual(data.id, id);
    });
    await t.test("fetchCarHasMake", async (t) => {
        assert.ok(data.make);
    });
});
