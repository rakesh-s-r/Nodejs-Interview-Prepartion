// A concurrency limiter is a utility that controls how many asynchronous tasks can run at the same time. 
// For example:
// You have 1000 API requests.
// Your server allows only 10 requests at a time.
// A concurrency limiter ensures only 10 are running, while the rest wait in a queue.
class ConcurrencyLimiter {
    constructor(limit) {
        this.limit = limit;
        this.active = 0;
        this.queue = [];
    }

    execute(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                task,
                resolve,
                reject
            });

            this.run();
        });
    }

    run() {
        if (this.active >= this.limit || this.queue.length === 0) {
            return;
        }

        const { task, resolve, reject } = this.queue.shift();

        this.active++;

        task()
            .then(resolve)
            .catch(reject)
            .finally(() => {
                this.active--;
                this.run();
            });

        this.run();
    }
}


const limiter = new ConcurrencyLimiter(5);

function apiCall(id) {
    return new Promise(resolve => {
        console.log(`Starting task ${id}`);

        setTimeout(() => {
            console.log(`Completed task ${id}`);
            resolve(id);
        }, 2000);
    });
}


for (let i = 1; i <= 10; i++) {
    limiter.execute(() => apiCall(i));
}
