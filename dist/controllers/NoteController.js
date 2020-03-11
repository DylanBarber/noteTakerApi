"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoteService_1 = require("../services/NoteService");
const router = require('express').Router();
router.post('/note', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('test');
    const noteService = new NoteService_1.NoteService();
    try {
        yield noteService.create(req.body);
    }
    catch (err) {
        if (err.message === 'Subject and body must be supplied' || err.message === 'Id cannot be supplied on create') {
            res.sendStatus(400);
        }
        else {
            res.sendStatus(500);
        }
    }
}));
router.get('/note', (req, res) => {
    // THIS IS WHERE CALL TO GET ON SERVICE WILL BE
    res.end();
});
router.put('/note', (req, res) => {
    // THIS IS WHERE CALL TO UPDATE NOTE ON SERVICE WILL BE
    res.end();
});
router.delete('/note', (req, res) => {
    // THIS IS WHERE CALL TO DELETE NOTE ON SERVICE WILL BE
    res.end();
});
module.exports = router;
//# sourceMappingURL=NoteController.js.map