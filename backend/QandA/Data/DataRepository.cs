using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using QandA.Data.Models;

namespace QandA.Data
{
    class DataRepository : IDataRepository
    {
        private readonly string _connectionString;

        public DataRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionString:DefaultConnection"];
        }

        public AnswerGetResponse GetAnswer(int answerId)
        {
            throw new NotImplementedException();
        }

        public QuestionGetSingleResponse GetQuestion(int questionId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<QuestionGetManyResponse> GetQuestions()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.Query<QuestionGetManyResponse>(
                    @"EXEC dbo.Question_GetMany"
                );
            }
        }

        public IEnumerable<QuestionGetManyResponse> GetQuestionsBySearch(string search)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.Query<QuestionGetManyResponse>(
                    @"EXEC dbo.Question_GetMany_BySearch @Search = @Search",
                    new { Search = search }
                );
            }
        }

        public IEnumerable<QuestionGetManyResponse> GetUnansweredQuestions()
        {
            throw new NotImplementedException();
        }

        public bool QuestionExists(int questionId)
        {
            throw new NotImplementedException();
        }
    }
}
