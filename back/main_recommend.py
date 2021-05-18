## function recommend_dis is used for when user want to input distance constraint
from recommend_dis import recommend_dis

## function recommend_dis is used for when user want to input number constraint
from recommend_num import  recommend_num

# This function used for judge if users' input is str(5km) or just a digit(10), so that to call the corresponding function.
def recommend_output(numbers_or_distance, current_position, gasoline_wanted, type_of_car):
    # This function for outputting the recommendatino result
    n_o_d = numbers_or_distance
    c_p = current_position
    g_w = gasoline_wanted
    t_o_c = type_of_car
    if str.isdigit(n_o_d):
        return recommend_num(n_o_d, c_p, g_w, t_o_c)
    else:
        return recommend_dis(n_o_d, c_p, g_w, t_o_c)

