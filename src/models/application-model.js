export default class Application {

    constructor(
        id,
        userId,
        name,
        email,
        experience
    ) {

        this.id = id;

        this.userId = userId;

        this.name = name;

        this.email = email;

        this.experience = experience;

        this.status = "pending";

        this.createdAt =
            new Date().toISOString();

    }

}