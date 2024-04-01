import React, { useState, useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemText, Divider, TextField } from '@mui/material';

const Sidebar = ({ onBotSelect }) => {
    const [bots, setBots] = useState([]);
    const [selectedBot, setSelectedBot] = useState('');
    const [newBotName, setNewBotName] = useState('');
    const [isBotCreated, setIsBotCreated] = useState(false); // Новое состояние для отслеживания создания бота

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.id) {
            const botsKey = `bots_${currentUser.id}`;
            const savedBots = JSON.parse(localStorage.getItem(botsKey));
            console.log('Bots loaded for current user:', savedBots); // Добавьте это
            if (savedBots) {
                setBots(savedBots);
            }
        }
    }, []);
    
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.id) {
            const botsKey = `bots_${currentUser.id}`;
            console.log('Saving bots for current user:', bots); // Добавьте это
            localStorage.setItem(botsKey, JSON.stringify(bots));
        }
    }, [bots]);
    

    const createBot = () => {
        if (newBotName && !bots.some(bot => bot.name === newBotName)) {
            const newBot = { name: newBotName, id: Date.now().toString() }; // Генерируем уникальный ID для бота
            const newBotsList = [...bots, newBot];
            setBots(newBotsList); // Обновляем состояние
            setNewBotName('');
            // Сохраняем ботов сразу после добавления нового
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser && currentUser.id) {
                localStorage.setItem(`bots_${currentUser.id}`, JSON.stringify(newBotsList));
            }
        } else {
            alert('Введите уникальное имя бота.');
        }
    };
    

    const selectBot = (botName) => {
        console.log('Бот выбран:', botName);
        setSelectedBot(botName);
        if (onBotSelect) {
          onBotSelect(botName); // call the function passed in props
        } else {
          console.error('onBotSelect is not defined'); // helpful for debugging
        }
      };

    const deleteBot = (botName) => {
        setBots(bots.filter(bot => bot.name !== botName));
        if (selectedBot === botName) {
          setSelectedBot('');
        }
      };

    return (
        <Box sx={{ height: '90vh', overflow: 'auto' }}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem sx={{ fontWeight: 'bold' }}>
                    <ListItemText primary={`Selected Bot: ${selectedBot}`} />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="New Bot Name"
                        value={newBotName}
                        onChange={(e) => setNewBotName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && createBot()} // Создать бота при нажатии Enter
                    />
                </ListItem>
                <ListItem disablePadding>
                    <Button onClick={createBot} fullWidth variant="contained" color="primary">
                        Create Chatbot
                    </Button>
                </ListItem>
                {bots.map((bot, index) => (
                <React.Fragment key={bot.id}>
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button onClick={() => selectBot(bot.name)} variant="contained" color="primary">     
                        {bot.name} {/* Используйте bot.name для отображения имени */}
                    </Button>
                    <Button onClick={() => deleteBot(bot.name)} variant="contained" color="secondary">
                        Delete
                    </Button>
                    </ListItem>
                    {index < bots.length - 1 && <Divider />}
                </React.Fragment>
                ))}

            </List>
        </Box>
    );
};

export default Sidebar;
