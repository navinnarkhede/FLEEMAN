using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Fleeman_Dotnet.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "add_on_master",
                columns: table => new
                {
                    add_on_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    add_on_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    add_on_daily_rate = table.Column<double>(type: "float", nullable: true),
                    rate_valid_until = table.Column<DateTime>(type: "datetime2", maxLength: 6, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.add_on_id);
                });

            migrationBuilder.CreateTable(
                name: "car_type_master",
                columns: table => new
                {
                    cartype_id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cartype_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    daily_rate = table.Column<double>(type: "float", nullable: true),
                    image_path = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    monthly_rate = table.Column<double>(type: "float", nullable: true),
                    weekly_rate = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.cartype_id);
                });

            migrationBuilder.CreateTable(
                name: "customer_master",
                columns: table => new
                {
                    cust_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    address_line1 = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    address_line2 = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    city = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    credit_card_number = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    credit_card_type = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    date_of_birth = table.Column<DateOnly>(type: "date", nullable: true),
                    driving_license_number = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    email = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    first_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    idp_number = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    issued_bydl = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    last_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    mobile_number = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    passport_issue_date = table.Column<DateOnly>(type: "date", nullable: true),
                    passport_issued_by = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    passport_number = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    passport_valid_from = table.Column<DateOnly>(type: "date", nullable: true),
                    passport_valid_through = table.Column<DateOnly>(type: "date", nullable: true),
                    phone_number = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    pincode = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    valid_throughdl = table.Column<DateOnly>(type: "date", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.cust_id);
                });

            migrationBuilder.CreateTable(
                name: "state_master",
                columns: table => new
                {
                    state_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    state_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.state_id);
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    email = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    username = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "city_master",
                columns: table => new
                {
                    city_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    city_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    state_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.city_id);
                    table.ForeignKey(
                        name: "FKfxtjuwt9iqx9n7xl6f8wl6uu4",
                        column: x => x.state_id,
                        principalTable: "state_master",
                        principalColumn: "state_id");
                });

            migrationBuilder.CreateTable(
                name: "hub_master",
                columns: table => new
                {
                    hub_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    contact_number = table.Column<long>(type: "bigint", nullable: true),
                    hub_address_and_details = table.Column<string>(type: "text", nullable: true),
                    hub_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    city_id = table.Column<int>(type: "int", nullable: true),
                    state_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.hub_id);
                    table.ForeignKey(
                        name: "FK7rdbu34jsqwuoyuound4e830p",
                        column: x => x.city_id,
                        principalTable: "city_master",
                        principalColumn: "city_id");
                    table.ForeignKey(
                        name: "FKf94kvk79lamurkcyvj8hhop1q",
                        column: x => x.state_id,
                        principalTable: "state_master",
                        principalColumn: "state_id");
                });

            migrationBuilder.CreateTable(
                name: "airport_master",
                columns: table => new
                {
                    airport_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    airport_code = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    airport_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    city_id = table.Column<int>(type: "int", nullable: true),
                    hub_id = table.Column<int>(type: "int", nullable: true),
                    state_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.airport_id);
                    table.ForeignKey(
                        name: "FK9q13ys5sara44e3t8iwsbehe7",
                        column: x => x.hub_id,
                        principalTable: "hub_master",
                        principalColumn: "hub_id");
                    table.ForeignKey(
                        name: "FKgykh73g2t7b9tyhou2eve5ljf",
                        column: x => x.state_id,
                        principalTable: "state_master",
                        principalColumn: "state_id");
                    table.ForeignKey(
                        name: "FKnacm5228qoxi0egygij94kqje",
                        column: x => x.city_id,
                        principalTable: "city_master",
                        principalColumn: "city_id");
                });

            migrationBuilder.CreateTable(
                name: "car_master",
                columns: table => new
                {
                    car_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    status = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    car_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    is_available = table.Column<string>(type: "enum('N','Y')", nullable: true),
                    maintenance_due_date = table.Column<DateOnly>(type: "date", nullable: true),
                    mileage = table.Column<double>(type: "float", nullable: true),
                    number_plate = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    cartype_id = table.Column<long>(type: "bigint", nullable: true),
                    hub_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.car_id);
                    table.ForeignKey(
                        name: "FKe7t3ybbd5mnrqomrch1wuyc6m",
                        column: x => x.cartype_id,
                        principalTable: "car_type_master",
                        principalColumn: "cartype_id");
                    table.ForeignKey(
                        name: "FKrbd83493vx6lu3vprvkx8qgqh",
                        column: x => x.hub_id,
                        principalTable: "hub_master",
                        principalColumn: "hub_id");
                });

            migrationBuilder.CreateTable(
                name: "booking_header_table",
                columns: table => new
                {
                    booking_id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    book_car = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    address = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    booking_date = table.Column<DateOnly>(type: "date", nullable: true),
                    daily_rate = table.Column<double>(type: "float", nullable: true),
                    email_id = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    end_date = table.Column<DateOnly>(type: "date", nullable: true),
                    first_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    last_name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    monthly_rate = table.Column<double>(type: "float", nullable: true),
                    pin = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    start_date = table.Column<DateOnly>(type: "date", nullable: true),
                    state = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    weekly_rate = table.Column<double>(type: "float", nullable: true),
                    car_id = table.Column<int>(type: "int", nullable: true),
                    cartype_id = table.Column<long>(type: "bigint", nullable: true),
                    cust_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.booking_id);
                    table.ForeignKey(
                        name: "FKdph943hu15r48ahrnkql3lrbl",
                        column: x => x.cust_id,
                        principalTable: "customer_master",
                        principalColumn: "cust_id");
                    table.ForeignKey(
                        name: "FKmmkg1viclerruhttx06973w3j",
                        column: x => x.car_id,
                        principalTable: "car_master",
                        principalColumn: "car_id");
                    table.ForeignKey(
                        name: "FKopo340pd5jigmo84cahh57cwo",
                        column: x => x.cartype_id,
                        principalTable: "car_type_master",
                        principalColumn: "cartype_id");
                });

            migrationBuilder.CreateTable(
                name: "booking_detail_table",
                columns: table => new
                {
                    booking_detail_id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    addon_rate = table.Column<double>(type: "float", nullable: true),
                    addon_id = table.Column<int>(type: "int", nullable: true),
                    booking_id = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.booking_detail_id);
                    table.ForeignKey(
                        name: "FK8lhwsgs4ew5tdogoed7fpif4a",
                        column: x => x.booking_id,
                        principalTable: "booking_header_table",
                        principalColumn: "booking_id");
                    table.ForeignKey(
                        name: "FKl1eiva9sie32vxofv6l7qj0g8",
                        column: x => x.addon_id,
                        principalTable: "add_on_master",
                        principalColumn: "add_on_id");
                });

            migrationBuilder.CreateTable(
                name: "invoice_header_table",
                columns: table => new
                {
                    invoice_id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    customer_details = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    date = table.Column<DateOnly>(type: "date", nullable: true),
                    handover_date = table.Column<DateOnly>(type: "date", nullable: true),
                    rate = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    rental_amt = table.Column<double>(type: "float", nullable: true),
                    return_date = table.Column<DateOnly>(type: "date", nullable: true),
                    total_addon_amt = table.Column<double>(type: "float", nullable: true),
                    total_amt = table.Column<double>(type: "float", nullable: true),
                    booking_id = table.Column<long>(type: "bigint", nullable: true),
                    car_id = table.Column<int>(type: "int", nullable: true),
                    cust_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.invoice_id);
                    table.ForeignKey(
                        name: "FK5dvc2a779phnc8cjjxx94swb5",
                        column: x => x.booking_id,
                        principalTable: "booking_header_table",
                        principalColumn: "booking_id");
                    table.ForeignKey(
                        name: "FKskcvkb6nr6713a2rjgy027a97",
                        column: x => x.cust_id,
                        principalTable: "customer_master",
                        principalColumn: "cust_id");
                    table.ForeignKey(
                        name: "FKt256nitu82j1d1ryxv2h7mx4r",
                        column: x => x.car_id,
                        principalTable: "car_master",
                        principalColumn: "car_id");
                });

            migrationBuilder.CreateTable(
                name: "invoice_detail_table",
                columns: table => new
                {
                    invdtl_id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    addon_amt = table.Column<double>(type: "float", nullable: true),
                    addon_id = table.Column<int>(type: "int", nullable: true),
                    invoice_id = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PRIMARY", x => x.invdtl_id);
                    table.ForeignKey(
                        name: "FKdxr8d4h98iq24g5944vho0txs",
                        column: x => x.addon_id,
                        principalTable: "add_on_master",
                        principalColumn: "add_on_id");
                    table.ForeignKey(
                        name: "FKjij1hnrk7hmdm8oq5yguqo8o9",
                        column: x => x.invoice_id,
                        principalTable: "invoice_header_table",
                        principalColumn: "invoice_id");
                });

            migrationBuilder.CreateIndex(
                name: "FK9q13ys5sara44e3t8iwsbehe7",
                table: "airport_master",
                column: "hub_id");

            migrationBuilder.CreateIndex(
                name: "FKgykh73g2t7b9tyhou2eve5ljf",
                table: "airport_master",
                column: "state_id");

            migrationBuilder.CreateIndex(
                name: "FKnacm5228qoxi0egygij94kqje",
                table: "airport_master",
                column: "city_id");

            migrationBuilder.CreateIndex(
                name: "FK8lhwsgs4ew5tdogoed7fpif4a",
                table: "booking_detail_table",
                column: "booking_id");

            migrationBuilder.CreateIndex(
                name: "FKl1eiva9sie32vxofv6l7qj0g8",
                table: "booking_detail_table",
                column: "addon_id");

            migrationBuilder.CreateIndex(
                name: "FKdph943hu15r48ahrnkql3lrbl",
                table: "booking_header_table",
                column: "cust_id");

            migrationBuilder.CreateIndex(
                name: "FKmmkg1viclerruhttx06973w3j",
                table: "booking_header_table",
                column: "car_id");

            migrationBuilder.CreateIndex(
                name: "FKopo340pd5jigmo84cahh57cwo",
                table: "booking_header_table",
                column: "cartype_id");

            migrationBuilder.CreateIndex(
                name: "FKe7t3ybbd5mnrqomrch1wuyc6m",
                table: "car_master",
                column: "cartype_id");

            migrationBuilder.CreateIndex(
                name: "FKrbd83493vx6lu3vprvkx8qgqh",
                table: "car_master",
                column: "hub_id");

            migrationBuilder.CreateIndex(
                name: "UKonp0df5km5sg4h2s4w34uc0yn",
                table: "car_master",
                column: "number_plate",
                unique: true,
                filter: "[number_plate] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "FKfxtjuwt9iqx9n7xl6f8wl6uu4",
                table: "city_master",
                column: "state_id");

            migrationBuilder.CreateIndex(
                name: "UKsnf65l86t4b0xj6v0f9nymegs",
                table: "customer_master",
                column: "email",
                unique: true,
                filter: "[email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "FK7rdbu34jsqwuoyuound4e830p",
                table: "hub_master",
                column: "city_id");

            migrationBuilder.CreateIndex(
                name: "FKf94kvk79lamurkcyvj8hhop1q",
                table: "hub_master",
                column: "state_id");

            migrationBuilder.CreateIndex(
                name: "UKq4cka6kuf15mrgsvs05wj1e87",
                table: "hub_master",
                column: "contact_number",
                unique: true,
                filter: "[contact_number] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "FKdxr8d4h98iq24g5944vho0txs",
                table: "invoice_detail_table",
                column: "addon_id");

            migrationBuilder.CreateIndex(
                name: "FKjij1hnrk7hmdm8oq5yguqo8o9",
                table: "invoice_detail_table",
                column: "invoice_id");

            migrationBuilder.CreateIndex(
                name: "FK5dvc2a779phnc8cjjxx94swb5",
                table: "invoice_header_table",
                column: "booking_id");

            migrationBuilder.CreateIndex(
                name: "FKskcvkb6nr6713a2rjgy027a97",
                table: "invoice_header_table",
                column: "cust_id");

            migrationBuilder.CreateIndex(
                name: "FKt256nitu82j1d1ryxv2h7mx4r",
                table: "invoice_header_table",
                column: "car_id");

            migrationBuilder.CreateIndex(
                name: "UKkiqfjabx9puw3p1eg7kily8kg",
                table: "user",
                column: "password",
                unique: true,
                filter: "[password] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UKob8kqyqqgmefl0aco34akdtpe",
                table: "user",
                column: "email",
                unique: true,
                filter: "[email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UKsb8bbouer5wak8vyiiy4pf2bx",
                table: "user",
                column: "username",
                unique: true,
                filter: "[username] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "airport_master");

            migrationBuilder.DropTable(
                name: "booking_detail_table");

            migrationBuilder.DropTable(
                name: "invoice_detail_table");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "add_on_master");

            migrationBuilder.DropTable(
                name: "invoice_header_table");

            migrationBuilder.DropTable(
                name: "booking_header_table");

            migrationBuilder.DropTable(
                name: "customer_master");

            migrationBuilder.DropTable(
                name: "car_master");

            migrationBuilder.DropTable(
                name: "car_type_master");

            migrationBuilder.DropTable(
                name: "hub_master");

            migrationBuilder.DropTable(
                name: "city_master");

            migrationBuilder.DropTable(
                name: "state_master");
        }
    }
}
