using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CdefrstEfApi.Migrations
{
    /// <inheritdoc />
    public partial class CdefrstDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Depts",
                columns: table => new
                {
                    Deptid = table.Column<int>(type: "int", nullable: false),
                    Deptname = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Depts", x => x.Deptid);
                });

            migrationBuilder.CreateTable(
                name: "Emps",
                columns: table => new
                {
                    Empid = table.Column<int>(type: "int", nullable: false),
                    Empname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Deptid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emps", x => x.Empid);
                    table.ForeignKey(
                        name: "FK_Emps_Depts_Deptid",
                        column: x => x.Deptid,
                        principalTable: "Depts",
                        principalColumn: "Deptid");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Emps_Deptid",
                table: "Emps",
                column: "Deptid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Emps");

            migrationBuilder.DropTable(
                name: "Depts");
        }
    }
}
