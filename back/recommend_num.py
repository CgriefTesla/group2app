from direct_distance import dire_dis_rank
def recommend_num(numbers, current_position, gasoline_wanted, type_of_car):
    num = numbers
    c_p = current_position
    g_w = gasoline_wanted
    t_o_c = type_of_car

    #This is the position of GS, for I cannot get the data, so temporarily using [10,10] to represent the position
    # of GS named a
    position_GS ={'b_GS':[20,20], 'c_GS':[30,30], 'd_GS':[40,40], 'e_GS':[50,50], 'f_GS':[60,60], 'a_GS':[10,10]}

    # This is the position of users, for I cannot get the data, so temporarily using [0,0]
    c_p = [0,0]

    ## Here is the function to calculate the direct distance and get the top n, to send to the Google API to get
    ## the route information. Temporarily assuming the number is 3
    temp_num = 3
    direct_dis = dire_dis_rank(c_p, position_GS, temp_num)

    ## Here is the function to call Google API
    ## But temporarily I will just use the dirct distance to represent it.
    route_distance = {'a':20, 'b_GS':40, 'c_GS':60}

    ## Here is the function to calculate the cheapest cost
    #route_distance = {'a': 20, 'b_GS': 40, 'c_GS': 60}
    GS_price = {'a': 1, 'b_GS': 2, 'c_GS': 3}
    fuel_cost = 0.1
    fuel_wanted = 100
    cost_list = cost(route_distance, GS_price, fuel_cost, fuel_wanted)

    return cost_list


## This is the function to calculate the cost
def cost(route_dis, GS_price, fuel_cost, fuel_wanted):
    cost = {}
    for key in route_dis.keys():
        temp = (fuel_wanted + fuel_cost * route_dis[key]) * GS_price[key]
        cost[key] = temp
    return cost
