// deploy.js
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function deploy() {
    try {
        // Получаем последний коммит
        const { stdout: lastCommit } = await execAsync('git log -1 --pretty=%B');
        const commitMessage = lastCommit.trim();

        // Получаем текущую дату
        const date = new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Формируем сообщение для деплоя
        const deployMessage = `🚀 Deploy ${date}\n\nBased on commit: ${commitMessage}`;

        let deployDefaultComand = "webpack --env mode=production target=github && gh-pages -d dist";

        // Запускаем деплой
        await execAsync(`${deployDefaultComand} -m "${deployMessage}"`, {
            stdio: 'inherit',
            shell: true
        });

        console.log('✅ Деплой успешно завершен!');
    } catch (error) {
        console.error('❌ Ошибка при деплое:', error);
        process.exit(1);
    }
}

deploy();