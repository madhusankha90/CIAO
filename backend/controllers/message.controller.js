const express = require('express');

exports.sendMessage = async (req, res) => {
    //console.log('send message',req.params.id);
    try {
        const {message} = req.body; 
        const {id} = req.params;
        const senderId = req.userId

    }catch(error) {
        console.log("Error in send message controller",error.message);
        res.status(500).json({error: "Internal server error"});
    }
} 